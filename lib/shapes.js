class Shape {}

class Square extends Shape {
  render() {
    return `
    <rect x="50" height="300" width="300" fill="
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
    <polygon points="50 15, 100 100, 0 100" fill=
    `;
  }
}

module.exports = { Square, Circle, Triangle };
