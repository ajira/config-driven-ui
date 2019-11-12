const PageFormat = {
  type: "Vertical",
  config: {},
  children: [
    {
      type: "Element",
      config: {
        id: "title",
        height: "200px",
        color: "yellow"
      },
      children: []
    },
    {
      type: "Horizontal",
      config: {},
      children: [
        {
          type: "Element",
          config: {
            id: "h1",
            width: "6",
            height: "200px",
            color: "green"
          },
          children: []
        },
        {
          type: "Vertical",
          config: {
            id: "h2",
            width: "6",
            height: "200px",
            color: "blue"
          },
          children: [
            {
              type: "Element",
              config: {
                id: "v1",
                height: "200px",
                color: "orange"
              },
              children: []
            },
            {
              type: "Element",
              config: {
                id: "v2",
                height: "200px",
                color: "grey"
              },
              children: []
            }
          ]
        }
      ]
    },
    {
      type: "Element",
      config: {
        id: "title2",
        height: "200px",
        color: "yellow"
      },
      children: []
    }
  ]
};

const VizConfig = {
  title: {
    type: "title",
    value: "Test Title"
  },
  h1: {
    url: "http://localhost:3002/users",
    type: "plot",
    plotMapping: { x: "createdDate", y: "kycStatus" },
    config: {
      type: "bar"
    }
  },
  v2: {
    url: "http://localhost:3002/users",
    type: "plot",
    plotMapping: { x: "createdDate", y: "gender" },
    config: {
      type: "scatter",
      mode: "lines+points",
      marker: { color: "blue" }
    }
  }
};

export { PageFormat, VizConfig };
