const datas = [
  {
    sepalLength: 5.1,
    sepalWidth: 3.5,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.7,
    sepalWidth: 3.2,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.6,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.9,
    petalLength: 1.7,
    petalWidth: 0.4,
    species: 0
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.4,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.4,
    sepalWidth: 2.9,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.1,
    species: 0
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.4,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.1,
    species: 0
  },
  {
    sepalLength: 4.3,
    sepalWidth: 3.0,
    petalLength: 1.1,
    petalWidth: 0.1,
    species: 0
  },
  {
    sepalLength: 5.8,
    sepalWidth: 4.0,
    petalLength: 1.2,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.7,
    sepalWidth: 4.4,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 0
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.9,
    petalLength: 1.3,
    petalWidth: 0.4,
    species: 0
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.5,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 0
  },
  {
    sepalLength: 5.7,
    sepalWidth: 3.8,
    petalLength: 1.7,
    petalWidth: 0.3,
    species: 0
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.5,
    petalWidth: 0.3,
    species: 0
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.4,
    petalLength: 1.7,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 0
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.6,
    petalLength: 1.0,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.3,
    petalLength: 1.7,
    petalWidth: 0.5,
    species: 0
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.4,
    petalLength: 1.9,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.0,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.4,
    petalLength: 1.6,
    petalWidth: 0.4,
    species: 0
  },
  {
    sepalLength: 5.2,
    sepalWidth: 3.5,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.2,
    sepalWidth: 3.4,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.7,
    sepalWidth: 3.2,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.1,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 0
  },
  {
    sepalLength: 5.2,
    sepalWidth: 4.1,
    petalLength: 1.5,
    petalWidth: 0.1,
    species: 0
  },
  {
    sepalLength: 5.5,
    sepalWidth: 4.2,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.2,
    petalLength: 1.2,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.5,
    sepalWidth: 3.5,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.6,
    petalLength: 1.4,
    petalWidth: 0.1,
    species: 0
  },
  {
    sepalLength: 4.4,
    sepalWidth: 3.0,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.5,
    petalLength: 1.3,
    petalWidth: 0.3,
    species: 0
  },
  {
    sepalLength: 4.5,
    sepalWidth: 2.3,
    petalLength: 1.3,
    petalWidth: 0.3,
    species: 0
  },
  {
    sepalLength: 4.4,
    sepalWidth: 3.2,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.5,
    petalLength: 1.6,
    petalWidth: 0.6,
    species: 0
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.9,
    petalWidth: 0.4,
    species: 0
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 0
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.2,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.3,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.3,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 0
  },
  {
    sepalLength: 7.0,
    sepalWidth: 3.2,
    petalLength: 4.7,
    petalWidth: 1.4,
    species: 1
  },
  {
    sepalLength: 6.4,
    sepalWidth: 3.2,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 4.9,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.3,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 6.5,
    sepalWidth: 2.8,
    petalLength: 4.6,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.8,
    petalLength: 4.5,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 6.3,
    sepalWidth: 3.3,
    petalLength: 4.7,
    petalWidth: 1.6,
    species: 1
  },
  {
    sepalLength: 4.9,
    sepalWidth: 2.4,
    petalLength: 3.3,
    petalWidth: 1.0,
    species: 1
  },
  {
    sepalLength: 6.6,
    sepalWidth: 2.9,
    petalLength: 4.6,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 5.2,
    sepalWidth: 2.7,
    petalLength: 3.9,
    petalWidth: 1.4,
    species: 1
  },
  {
    sepalLength: 5.0,
    sepalWidth: 2.0,
    petalLength: 3.5,
    petalWidth: 1.0,
    species: 1
  },
  {
    sepalLength: 5.9,
    sepalWidth: 3.0,
    petalLength: 4.2,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.2,
    petalLength: 4.0,
    petalWidth: 1.0,
    species: 1
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.9,
    petalLength: 4.7,
    petalWidth: 1.4,
    species: 1
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.9,
    petalLength: 3.6,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 4.4,
    petalWidth: 1.4,
    species: 1
  },
  {
    sepalLength: 5.6,
    sepalWidth: 3.0,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 4.1,
    petalWidth: 1.0,
    species: 1
  },
  {
    sepalLength: 6.2,
    sepalWidth: 2.2,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.5,
    petalLength: 3.9,
    petalWidth: 1.1,
    species: 1
  },
  {
    sepalLength: 5.9,
    sepalWidth: 3.2,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 1
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.8,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.5,
    petalLength: 4.9,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.8,
    petalLength: 4.7,
    petalWidth: 1.2,
    species: 1
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.9,
    petalLength: 4.3,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 6.6,
    sepalWidth: 3.0,
    petalLength: 4.4,
    petalWidth: 1.4,
    species: 1
  },
  {
    sepalLength: 6.8,
    sepalWidth: 2.8,
    petalLength: 4.8,
    petalWidth: 1.4,
    species: 1
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.0,
    petalLength: 5.0,
    petalWidth: 1.7,
    species: 1
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.9,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.6,
    petalLength: 3.5,
    petalWidth: 1.0,
    species: 1
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.4,
    petalLength: 3.8,
    petalWidth: 1.1,
    species: 1
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.4,
    petalLength: 3.7,
    petalWidth: 1.0,
    species: 1
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 3.9,
    petalWidth: 1.2,
    species: 1
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.6,
    species: 1
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.0,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 6.0,
    sepalWidth: 3.4,
    petalLength: 4.5,
    petalWidth: 1.6,
    species: 1
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 4.7,
    petalWidth: 1.5,
    species: 1
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.3,
    petalLength: 4.4,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 5.6,
    sepalWidth: 3.0,
    petalLength: 4.1,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.5,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.6,
    petalLength: 4.4,
    petalWidth: 1.2,
    species: 1
  },
  {
    sepalLength: 6.1,
    sepalWidth: 3.0,
    petalLength: 4.6,
    petalWidth: 1.4,
    species: 1
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.6,
    petalLength: 4.0,
    petalWidth: 1.2,
    species: 1
  },
  {
    sepalLength: 5.0,
    sepalWidth: 2.3,
    petalLength: 3.3,
    petalWidth: 1.0,
    species: 1
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.7,
    petalLength: 4.2,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 5.7,
    sepalWidth: 3.0,
    petalLength: 4.2,
    petalWidth: 1.2,
    species: 1
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.9,
    petalLength: 4.2,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 6.2,
    sepalWidth: 2.9,
    petalLength: 4.3,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 5.1,
    sepalWidth: 2.5,
    petalLength: 3.0,
    petalWidth: 1.1,
    species: 1
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.8,
    petalLength: 4.1,
    petalWidth: 1.3,
    species: 1
  },
  {
    sepalLength: 6.3,
    sepalWidth: 3.3,
    petalLength: 6.0,
    petalWidth: 2.5,
    species: 2
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.9,
    species: 2
  },
  {
    sepalLength: 7.1,
    sepalWidth: 3.0,
    petalLength: 5.9,
    petalWidth: 2.1,
    species: 2
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.9,
    petalLength: 5.6,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.8,
    petalWidth: 2.2,
    species: 2
  },
  {
    sepalLength: 7.6,
    sepalWidth: 3.0,
    petalLength: 6.6,
    petalWidth: 2.1,
    species: 2
  },
  {
    sepalLength: 4.9,
    sepalWidth: 2.5,
    petalLength: 4.5,
    petalWidth: 1.7,
    species: 2
  },
  {
    sepalLength: 7.3,
    sepalWidth: 2.9,
    petalLength: 6.3,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.7,
    sepalWidth: 2.5,
    petalLength: 5.8,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 7.2,
    sepalWidth: 3.6,
    petalLength: 6.1,
    petalWidth: 2.5,
    species: 2
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.2,
    petalLength: 5.1,
    petalWidth: 2.0,
    species: 2
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.7,
    petalLength: 5.3,
    petalWidth: 1.9,
    species: 2
  },
  {
    sepalLength: 6.8,
    sepalWidth: 3.0,
    petalLength: 5.5,
    petalWidth: 2.1,
    species: 2
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.5,
    petalLength: 5.0,
    petalWidth: 2.0,
    species: 2
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.8,
    petalLength: 5.1,
    petalWidth: 2.4,
    species: 2
  },
  {
    sepalLength: 6.4,
    sepalWidth: 3.2,
    petalLength: 5.3,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.5,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 7.7,
    sepalWidth: 3.8,
    petalLength: 6.7,
    petalWidth: 2.2,
    species: 2
  },
  {
    sepalLength: 7.7,
    sepalWidth: 2.6,
    petalLength: 6.9,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.2,
    petalLength: 5.0,
    petalWidth: 1.5,
    species: 2
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.2,
    petalLength: 5.7,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.8,
    petalLength: 4.9,
    petalWidth: 2.0,
    species: 2
  },
  {
    sepalLength: 7.7,
    sepalWidth: 2.8,
    petalLength: 6.7,
    petalWidth: 2.0,
    species: 2
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.7,
    petalLength: 4.9,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.3,
    petalLength: 5.7,
    petalWidth: 2.1,
    species: 2
  },
  {
    sepalLength: 7.2,
    sepalWidth: 3.2,
    petalLength: 6.0,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.2,
    sepalWidth: 2.8,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.1,
    sepalWidth: 3.0,
    petalLength: 4.9,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.8,
    petalLength: 5.6,
    petalWidth: 2.1,
    species: 2
  },
  {
    sepalLength: 7.2,
    sepalWidth: 3.0,
    petalLength: 5.8,
    petalWidth: 1.6,
    species: 2
  },
  {
    sepalLength: 7.4,
    sepalWidth: 2.8,
    petalLength: 6.1,
    petalWidth: 1.9,
    species: 2
  },
  {
    sepalLength: 7.9,
    sepalWidth: 3.8,
    petalLength: 6.4,
    petalWidth: 2.0,
    species: 2
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.8,
    petalLength: 5.6,
    petalWidth: 2.2,
    species: 2
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.8,
    petalLength: 5.1,
    petalWidth: 1.5,
    species: 2
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.6,
    petalLength: 5.6,
    petalWidth: 1.4,
    species: 2
  },
  {
    sepalLength: 7.7,
    sepalWidth: 3.0,
    petalLength: 6.1,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 6.3,
    sepalWidth: 3.4,
    petalLength: 5.6,
    petalWidth: 2.4,
    species: 2
  },
  {
    sepalLength: 6.4,
    sepalWidth: 3.1,
    petalLength: 5.5,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.0,
    sepalWidth: 3.0,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 2
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 5.4,
    petalWidth: 2.1,
    species: 2
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 5.6,
    petalWidth: 2.4,
    species: 2
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 5.1,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.9,
    species: 2
  },
  {
    sepalLength: 6.8,
    sepalWidth: 3.2,
    petalLength: 5.9,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.3,
    petalLength: 5.7,
    petalWidth: 2.5,
    species: 2
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.0,
    petalLength: 5.2,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.5,
    petalLength: 5.0,
    petalWidth: 1.9,
    species: 2
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.2,
    petalWidth: 2.0,
    species: 2
  },
  {
    sepalLength: 6.2,
    sepalWidth: 3.4,
    petalLength: 5.4,
    petalWidth: 2.3,
    species: 2
  },
  {
    sepalLength: 5.9,
    sepalWidth: 3.0,
    petalLength: 5.1,
    petalWidth: 1.8,
    species: 2
  }
]
const sepalLength = []
for (let ele of datas) {
  sepalLength.push(ele.sepalLength)
}
console.log(sepalLength)

const sepalWidth = []
for (let ele of datas) {
  sepalWidth.push(ele.sepalWidth)
}
console.log(sepalWidth)

const petalLength = []
for (let ele of datas) {
  petalLength.push(ele.petalLength)
}
console.log(petalLength)

const petalWidth = []
for (let ele of datas) {
  petalWidth.push(ele.petalWidth)
}
console.log(petalWidth)

const species = []
for (let ele of datas) {
  species.push(ele.species)
}
console.log(species)

for (let i = 0; i < species.length; i++) {
  const iris = [
    sepalLength[i],
    sepalWidth[i],
    petalLength[i],
    petalWidth[i],
    species[i]
  ]
  console.log(iris)
}
const iris = [sepalLength, sepalWidth, petalLength, petalWidth, species]

for (let i in iris) {
}
