#  Resident QA Automation Assignment

## Project Setup

# Clone repository
git clone <https://github.com/BArman1991/RESIDENT>

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

###Reports 
HTML Report: npx playwright show-report

Allure Report: npm run allure:generate

Trace: npx playwright show-trace test-results/**/trace.zip
