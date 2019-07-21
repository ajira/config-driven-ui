const PageFormat = {
  id: 1,
  rows: [
    [
      {
        width: 2,
        height: "200px",
        color: "yellow",
        id: 1
      },
      {
        width: 10,
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
        id: 1
      },
      {
        width: 8,
        height: "200px",
        color: "green",
        id: 2
      }
    ],
    [
      {
        width: 2,
        height: "200px",
        color: "blue",
        id: 1
      },
      {
        width: 2,
        height: "200px",
        color: "blue",
        id: 2
      },
      {
        width: 8,
        height: "200px",
        color: "green",
        id: 3
      }
    ],
    [
      {
        width: 8,
        rows: [
          { height: "200px", color: "yellow", id: 1 },
          { height: "200px", color: "orange", id: 2 }
        ]
      },
      {
        width: 2,
        height: "400px",
        color: "blue",
        id: 1
      },
      {
        width: 2,
        height: "400px",
        color: "green",
        id: 2
      }
    ]
  ]
};

export default PageFormat;
