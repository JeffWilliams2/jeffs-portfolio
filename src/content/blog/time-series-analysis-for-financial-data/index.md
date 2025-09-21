---
title: "Time Series Analysis for Financial Data with Python"
description: "A deep dive into analyzing financial time series data using Python, featuring advanced techniques for market analysis and prediction."
date: 2025-08-20
tags: ["python", "finance", "data-analysis", "time-series", "pandas"]
---

Time series analysis is crucial for understanding financial markets and making data-driven decisions. In this post, we'll explore advanced techniques for analyzing financial time series data using Python.

## Setting Up the Environment

First, let's set up our Python environment with the necessary libraries:

```python
import pandas as pd
import numpy as np
from statsmodels.tsa.stattools import adfuller
from statsmodels.tsa.seasonal import seasonal_decompose
from pmdarima import auto_arima
import yfinance as yf
```

## Data Collection and Preprocessing

Let's fetch and prepare some financial data:

```python
def fetch_financial_data(ticker, start_date, end_date):
    # Fetch data from Yahoo Finance
    data = yf.download(ticker, start=start_date, end=end_date)
    
    # Basic preprocessing
    data['Returns'] = data['Adj Close'].pct_change()
    data['Log_Returns'] = np.log(data['Adj Close']/data['Adj Close'].shift(1))
    
    return data.dropna()

# Example usage
spy_data = fetch_financial_data('SPY', '2020-01-01', '2025-09-20')
```

## Stationarity Testing

Before analyzing time series data, we need to check for stationarity:

```python
def check_stationarity(timeseries):
    # Augmented Dickey-Fuller test
    result = adfuller(timeseries.dropna())
    
    print('ADF Statistic:', result[0])
    print('p-value:', result[1])
    print('Critical values:')
    for key, value in result[4].items():
        print(f'\t{key}: {value}')
        
    # Return True if stationary (p-value < 0.05)
    return result[1] < 0.05

# Check stationarity of returns
is_stationary = check_stationarity(spy_data['Returns'])
```

## Time Series Decomposition

Decompose the series into trend, seasonal, and residual components:

```python
def decompose_series(data, column='Adj Close', period=252):  # 252 trading days
    decomposition = seasonal_decompose(data[column], 
                                    period=period, 
                                    extrapolate_trend='freq')
    
    return {
        'trend': decomposition.trend,
        'seasonal': decomposition.seasonal,
        'residual': decomposition.resid
    }

# Decompose the price series
components = decompose_series(spy_data)
```

## Rolling Statistics

Calculate rolling statistics for technical analysis:

```python
def calculate_rolling_stats(data, windows=[20, 50, 200]):
    stats = pd.DataFrame(index=data.index)
    
    for window in windows:
        # Moving averages
        stats[f'MA_{window}'] = data['Adj Close'].rolling(window=window).mean()
        
        # Bollinger Bands
        stats[f'BB_upper_{window}'] = (data['Adj Close'].rolling(window=window).mean() + 
                                      2 * data['Adj Close'].rolling(window=window).std())
        stats[f'BB_lower_{window}'] = (data['Adj Close'].rolling(window=window).mean() - 
                                      2 * data['Adj Close'].rolling(window=window).std())
        
        # Volatility
        stats[f'Volatility_{window}'] = data['Returns'].rolling(window=window).std() * np.sqrt(252)
    
    return stats

rolling_stats = calculate_rolling_stats(spy_data)
```

## Advanced Time Series Models

Implement ARIMA model with automatic parameter selection:

```python
def fit_arima_model(data, column='Returns'):
    # Find optimal ARIMA parameters
    model = auto_arima(data[column],
                      start_p=1, start_q=1,
                      max_p=3, max_q=3,
                      m=1,
                      start_P=0, seasonal=False,
                      d=1, D=1, trace=True,
                      error_action='ignore',
                      suppress_warnings=True,
                      stepwise=True)
    
    return model

# Fit ARIMA model
arima_model = fit_arima_model(spy_data)
```

## Forecasting

Make predictions using our fitted model:

```python
def make_predictions(model, steps=30):
    forecast, conf_int = model.predict(n_periods=steps, 
                                     return_conf_int=True)
    
    return {
        'forecast': forecast,
        'lower_bound': conf_int[:, 0],
        'upper_bound': conf_int[:, 1]
    }

# Generate forecasts
predictions = make_predictions(arima_model)
```

## Market Regime Detection

Implement a Hidden Markov Model for market regime detection:

```python
from hmmlearn.hmm import GaussianHMM

def detect_market_regime(returns, n_states=2):
    # Reshape data for HMM
    data = np.column_stack([returns])
    
    # Fit HMM
    model = GaussianHMM(n_components=n_states, 
                       covariance_type="full", 
                       n_iter=1000)
    model.fit(data)
    
    # Predict states
    states = model.predict(data)
    
    return states

# Detect market regimes
regimes = detect_market_regime(spy_data['Returns'])
```

## Risk Analysis

Calculate various risk metrics:

```python
def calculate_risk_metrics(returns):
    metrics = {
        'annualized_return': returns.mean() * 252,
        'annualized_vol': returns.std() * np.sqrt(252),
        'sharpe_ratio': (returns.mean() * 252) / (returns.std() * np.sqrt(252)),
        'skewness': returns.skew(),
        'kurtosis': returns.kurtosis(),
        'var_95': np.percentile(returns, 5),
        'cvar_95': returns[returns <= np.percentile(returns, 5)].mean()
    }
    
    return pd.Series(metrics)

risk_metrics = calculate_risk_metrics(spy_data['Returns'])
```

## Putting It All Together

Here's how to combine all these analyses:

```python
def comprehensive_analysis(ticker, start_date, end_date):
    # Fetch data
    data = fetch_financial_data(ticker, start_date, end_date)
    
    # Run analyses
    is_stationary = check_stationarity(data['Returns'])
    components = decompose_series(data)
    rolling_stats = calculate_rolling_stats(data)
    model = fit_arima_model(data)
    predictions = make_predictions(model)
    regimes = detect_market_regime(data['Returns'])
    risk_metrics = calculate_risk_metrics(data['Returns'])
    
    return {
        'data': data,
        'is_stationary': is_stationary,
        'components': components,
        'rolling_stats': rolling_stats,
        'predictions': predictions,
        'regimes': regimes,
        'risk_metrics': risk_metrics
    }
```

## Visualization and Reporting

The analysis results can be visualized using libraries like plotly or matplotlib for interactive dashboards. For example:

```python
import plotly.graph_objects as go

def plot_analysis_results(analysis_results):
    fig = go.Figure()
    
    # Plot price and predictions
    fig.add_trace(go.Scatter(
        x=analysis_results['data'].index,
        y=analysis_results['data']['Adj Close'],
        name='Actual Price'
    ))
    
    # Add technical indicators
    for ma in [20, 50, 200]:
        fig.add_trace(go.Scatter(
            x=analysis_results['rolling_stats'].index,
            y=analysis_results['rolling_stats'][f'MA_{ma}'],
            name=f'{ma}-day MA'
        ))
    
    fig.show()
```

## Conclusion

This comprehensive approach to time series analysis provides a solid foundation for financial data analysis. The modular design allows for easy extensions and modifications based on specific analysis needs.

Remember to:
- Always validate your data quality
- Consider market microstructure effects
- Be aware of survivorship bias in historical data
- Account for transaction costs in trading strategies
- Implement proper risk management

In future posts, we'll explore more advanced topics like machine learning for market prediction and high-frequency data analysis.