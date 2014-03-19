function Grid(size) {
  this.size = size;

  this.cells = [];

  this.build();
}

// Build a grid of the specified size
Grid.prototype.build = function () {
  for (var x = 0; x < this.size; x++) {
    var row = this.cells[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(null);
    }
  }
};

// Find the first available random position
Grid.prototype.randomAvailableCell = function () {
  var cells = this.availableCells();

  if (cells.length) {
    return cells[Math.floor(Math.random() * cells.length)];
  }
};

Grid.prototype.availableCells = function () {
  var cells = [];

  this.eachCell(function (x, y, tile) {
    if (!tile) {
      cells.push({ x: x, y: y });
    }
  });

  return cells;
};

// Call callback for every cell
Grid.prototype.eachCell = function (callback) {
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      callback(x, y, this.cells[x][y]);
    }
  }
};

// Check if there are any cells available
Grid.prototype.cellsAvailable = function () {
  return !!this.availableCells().length;
};

// Check if the specified cell is taken
Grid.prototype.cellAvailable = function (cell) {
  return !this.cellOccupied(cell);
};

Grid.prototype.cellOccupied = function (cell) {
  return !!this.cellContent(cell);
};

Grid.prototype.cellContent = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells[cell.x][cell.y];
  } else {
    return null;
  }
};

// Inserts a tile at its position
Grid.prototype.insertTile = function (tile) {
  this.cells[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function (tile) {
  this.cells[tile.x][tile.y] = null;
};

Grid.prototype.withinBounds = function (position) {
  return position.x >= 0 && position.x < this.size &&
         position.y >= 0 && position.y < this.size;
};

Grid.prototype.findWorstMove = function() {
    var candidates = this.availableCells();
    var values = [2, 4];
    var worstMoves = [];
    for (var i = 0; i < candidates.length; i++) {
	var cell = candidates[i];
	
    }
}

Grid.prototype.movesAvailable = function () {
    return this.canMoveUp() + 
	this.canMoveDown() +
	this.canMoveLeft() +
	this.canMoveRight();
}

Grid.prototype.canMoveUp = function () {
    for (var x = 0; x < this.size; x++) {
	for (var y = 0; y < this.size; y++) {
	    var curr = this.cells[x][y];
	    if (curr !== null){
		var cellAbove = {x: x, y: y-1};
		if (this.withinBounds(cellAbove) && 
		    this.cellAvailable(cellAbove))
		    return 1;
		if (this.withinBounds(cellAbove) && 
		    this.cellContent(cellAbove).value == curr.value)
		    return 1;
	    }
	}
    }
    return 0;
}

Grid.prototype.canMoveDown = function () {
    for (var x = 0; x < this.size; x++) {
	for (var y = 0; y < this.size; y++) {
	    var curr = this.cells[x][y];
	    if (curr !== null){
		var cellAbove = {x: x, y: y+1};
		if (this.withinBounds(cellAbove) && 
		    this.cellAvailable(cellAbove))
		    return 1;
		if (this.withinBounds(cellAbove) && 
		    this.cellContent(cellAbove).value == curr.value)
		    return 1;
	    }
	}
    }
    return 0;
}

Grid.prototype.canMoveLeft = function () {
    for (var x = 0; x < this.size; x++) {
	for (var y = 0; y < this.size; y++) {
	    var curr = this.cells[x][y];
	    if (curr !== null){
		var cellAbove = {x: x-1, y: y};
		if (this.withinBounds(cellAbove) && 
		    this.cellAvailable(cellAbove))
		    return 1;
		if (this.withinBounds(cellAbove) && 
		    this.cellContent(cellAbove).value == curr.value)
		    return 1;
	    }
	}
    }
    return 0;
}

Grid.prototype.canMoveRight = function () {
     for (var x = 0; x < this.size; x++) {
	for (var y = 0; y < this.size; y++) {
	    var curr = this.cells[x][y];
	    if (curr !== null){
		var cellAbove = {x: x+1, y: y};
		if (this.withinBounds(cellAbove) && 
		    this.cellAvailable(cellAbove))
		    return 1;
		if (this.withinBounds(cellAbove) && 
		    this.cellContent(cellAbove).value == curr.value)
		    return 1;
	    }
	}
    }
    return 0;
}