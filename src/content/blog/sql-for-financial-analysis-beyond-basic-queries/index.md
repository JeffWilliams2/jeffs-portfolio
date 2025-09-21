---
title: "SQL for Financial Analysis: Beyond Basic Queries"
description: "Master SQL techniques for financial analysis with practical examples covering moving averages, time series analysis, and key financial metrics calculations."
date: 2025-09-15
tags: ["sql", "finance", "data-analysis", "tutorial"]
---

Mastering SQL techniques is crucial for effective analysis and reporting. In this post, we'll explore some powerful SQL features that go beyond basic queries, specifically focusing on financial analysis applications.

## Window Functions for Financial Time Series

### Moving Averages and Rolling Returns

Moving averages are essential for smoothing out price fluctuations and identifying trends. Here's how to calculate them using SQL window functions:

```sql
SELECT 
    date,
    stock_price,
    AVG(stock_price) OVER (
        ORDER BY date 
        ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
    ) as moving_avg_20day
FROM stock_prices
WHERE symbol = 'AAPL'
ORDER BY date;
```

For rolling returns calculation:

```sql
SELECT 
    date,
    stock_price,
    (stock_price - LAG(stock_price, 20) OVER (ORDER BY date)) / 
    LAG(stock_price, 20) OVER (ORDER BY date) * 100 as return_20day
FROM stock_prices
WHERE symbol = 'AAPL'
ORDER BY date;
```

## Time Series Analysis with SQL

### Year-over-Year Growth

Calculate YoY growth rates for revenue or any financial metric:

```sql
SELECT 
    year,
    quarter,
    revenue,
    ((revenue - LAG(revenue, 4) OVER (ORDER BY year, quarter)) / 
    LAG(revenue, 4) OVER (ORDER BY year, quarter)) * 100 as yoy_growth
FROM quarterly_financials
WHERE company_id = 'AAPL'
ORDER BY year, quarter;
```

### Period-over-Period Comparisons

Compare financial metrics across different periods:

```sql
WITH quarterly_metrics AS (
    SELECT 
        quarter,
        SUM(revenue) as revenue,
        LAG(SUM(revenue)) OVER (ORDER BY quarter) as prev_quarter_revenue,
        LAG(SUM(revenue), 4) OVER (ORDER BY quarter) as prev_year_revenue
    FROM financial_statements
    GROUP BY quarter
)
SELECT 
    quarter,
    revenue,
    ((revenue - prev_quarter_revenue) / prev_quarter_revenue * 100) as qoq_growth,
    ((revenue - prev_year_revenue) / prev_year_revenue * 100) as yoy_growth
FROM quarterly_metrics;
```

## Financial Metrics Calculations

### Portfolio Performance and Risk Metrics

Calculate key portfolio metrics:

```sql
-- Portfolio Returns
WITH daily_returns AS (
    SELECT 
        date,
        symbol,
        (close_price - LAG(close_price) OVER (PARTITION BY symbol ORDER BY date)) / 
        LAG(close_price) OVER (PARTITION BY symbol ORDER BY date) as daily_return
    FROM portfolio_holdings
)
SELECT 
    symbol,
    AVG(daily_return) * 252 as annualized_return,
    STDDEV(daily_return) * SQRT(252) as annualized_volatility,
    AVG(daily_return) / STDDEV(daily_return) * SQRT(252) as sharpe_ratio
FROM daily_returns
GROUP BY symbol;
```

## Common Pitfalls and Best Practices

1. **Data Quality Checks**: Always validate financial data for:
   ```sql
   -- Check for missing values
   SELECT 
       date,
       COUNT(*) as total_records,
       SUM(CASE WHEN price IS NULL THEN 1 ELSE 0 END) as missing_prices
   FROM stock_prices
   GROUP BY date
   HAVING SUM(CASE WHEN price IS NULL THEN 1 ELSE 0 END) > 0;
   ```

2. **Performance Optimization**:
   - Index date and symbol columns
   - Materialize commonly used calculations
   - Use CTEs for better code organization

3. **Handling Edge Cases**:
   ```sql
   -- Handle stock splits and adjustments
   SELECT 
       date,
       symbol,
       CASE 
           WHEN abs(price_change) > 0.5 THEN previous_price * split_ratio
           ELSE price 
       END as adjusted_price
   FROM daily_stock_data;
   ```

## Conclusion

Advanced SQL techniques are powerful tools for financial analysis. By mastering window functions, time series analysis, and proper handling of financial data, you can build robust and efficient analysis pipelines. Remember to always validate your data and consider edge cases when working with financial datasets.
