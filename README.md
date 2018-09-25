Steps 
1. Include dependency:   "thin-crust": "git+https://github.com/keshreesingh2/thin-crust#npm-packaged"
2. copy cucumber-js launch config “cucumber.js” at root
3. Create results folder at root for test results.
4. Download scripts folder for report generation scripts
5. Add run scripts for execution
6. Add feature file under 'features' folder
7. Update tag in launch config file
8. Update support code path to "-r node_modules/thin-crust/support"
9. run `yarn wd:update`, `yarn wd:start`
10. run `yarn test-cukes`
11. run `yarn gen-report`