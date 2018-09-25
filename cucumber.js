module.exports = {
    test: 'features/**/*.feature -r node_modules/thin-crust/support -t @SimpleRange -f json:results/result.json'
}
