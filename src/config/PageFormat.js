const PageFormat = {
  id: 0,
  rows: [
    [
      {
        width: 6,
        height: "200px",
        color: "yellow",
        id: 1
      },
      {
        width: 6,
        height: "200px",
        color: "green",
        id: 2
      }
    ],
    [
      {
        width: 4,
        height: "200px",
        color: "blue",
        id: 3
      },
      {
        width: 8,
        height: "200px",
        color: "green",
        id: 4
      }
    ],
    [
      {
        width: 2,
        height: "200px",
        color: "blue",
        id: 5
      },
      {
        width: 2,
        height: "200px",
        color: "blue",
        id: 6
      },
      {
        width: 8,
        height: "200px",
        color: "green",
        id: 7
      }
    ],
    [
      {
        width: 8,
        rows: [
          { height: "200px", color: "yellow", id: 8 },
          { height: "200px", color: "orange", id: 9 }
        ]
      },
      {
        width: 2,
        height: "400px",
        color: "blue",
        id: 10
      },
      {
        width: 2,
        height: "400px",
        color: "green",
        id: 11
      }
    ]
  ]
};

const VizConfig = {
  2: {
    url: "http://localhost:3002/users",
    type: "plot",
    plotMapping: { x: "createdDate", y: "kycStatus" },
    config: {
      type: "bar"
    }
  },
  3: {
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
