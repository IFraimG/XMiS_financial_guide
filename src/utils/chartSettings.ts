export default {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      onClick: null,
      labels: {
        color: '#0A2896',
        usePointStyle: false,
        font: {
          size: 16,
          family: 'Helvetica Neue',
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
        color: '#9DA9D5',
      },
    },
  },
}
