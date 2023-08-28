class Shape {}

class Square extends Shape {
  render() {
    return `
    <rect x="50" height="200" width="200" fill=
    `;
  }
}

class Circle extends Shape {
  render() {
    return `
    <circle cx="150" cy="100" r="80" fill=
    `;
  }
}

class Triangle extends Shape {
  render() {
    return `
    <polygon points="150, 0 290, 200 10, 200" fill=
    `;
  }
}

module.exports = { Square, Circle, Triangle };
