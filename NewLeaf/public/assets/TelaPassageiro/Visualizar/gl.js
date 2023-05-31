const canvas = document.getElementById("papel");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
const gl = canvas.getContext("webgl");

gl.clearColor(0,0,0,1);
gl.clear(gl.COLOR_BUFFER_BIT);

const vertices = [
// Front face
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // Back face
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // Top face
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // Bottom face
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // Right face
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // Left face
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];

const numComponents = 3;

const faceColors = [
	[1,0,1,1],
	[0,0,1,1],
	[1,1,1,1],
	[1,0,0,1],
	[1,0,0.6,1],
	[0.5,0.7,1,1],
];

var cores = [];

for (let i = 0; i < faceColors.length; i++) {
	let c = faceColors[j];
	cores = cores.concat(c,c,c,c);
}

alert(cores);

function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
  ];

  // Now send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  return indexBuffer;
}

function initBuffers(gl) {
	const indexBuffer = initIndexBuffer(gl);

	return {
	  position: positionBuffer,
	  color: colorBuffer,
	  indices: indexBuffer,
	};	
}

function drawScene() {

}
