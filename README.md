#  Resident QA Automation Assignment

## Project Setup

### Install dependencies
npm ci

npx playwright install --with-deps


### Test Structure
tests/ 
    api tests/
    ui end-to-end tests/
src/ 
    fixtures/ Shared fixtures and base setup
    pages/    Page Object Model (POM) classes

### Run Tests

Run API tests: npx playwright test tests/api

Run UI tests: npx playwright test tests/ui

Run All tests (UI + API): npx playwright test

###Report
npx playwright show-report

Trace: npx playwright show-trace test-results/**/trace.zip
