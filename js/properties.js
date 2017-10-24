define([], function() {

  var dimensions = {
    uses: "dimensions",
    min: 1,
    max: 10
  };

  var measures = {
    uses: "measures",
    min: 1,
    max: 10
  };

  var sorting = {
    uses: "sorting"
  };

  var settings = {
    uses: "settings"
  };

  var chartEditor = {
    type: "items",
    label: "Chart",
    items: {
      chartEditor: {
        ref: "anychart.chartEditor",
        component: "buttongroup",
        type: "string",
        options: [{
          value: "true",
          label: "Run Chart Editor",
          tooltip: "Run Chart Editor to customize chart"
        }],
        defaultValue: "false"
      },
      code: {
        ref: "anychart.code",
        component: "textarea",
        rows: 7,
        maxlength: 4096,
        show: false
      },
      model: {
        ref: "anychart.model",
        component: "textarea",
        rows: 7,
        maxlength: 4096,
        show: false
      },
      field: {
        ref: "anychart.field",
        type: "string",
        show: false
      }
    }
  };

  return {
    type: "items",
    component: "accordion",
    items: {
      dimensions: dimensions,
      measures: measures,
      sorting: sorting,
      settings: settings,
      editor: chartEditor
    }
  };
});
