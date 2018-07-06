window.onload = function() {
    var paper = Raphael("holder", 1800, 1800);
    var pathStrokeWidth = 8;
    var mStart = -1;
    var mEnd = -1;
    var testPath = [];
    var pathLength = 55.0;

    var objLength = Obj.length,
        ObjPathLength = ObjPath.length,
        i, j;

    for (i = ObjPathLength - 1; i >= 0; i--) {
        var one = ObjPath[i];
        var oneLength = one.path.length;
        var mColor = ["", "#DF0101", "", "#F4A5A8", "", "#DF0101", "", "#FFBF00", "#FFBF00", "", "#0080FF", "#0080FF", "#D9E01E", "", "", "#C39132", "", "#D9E01E"];
        for (j = 0; j < oneLength; j++) {
            if (one.path[j].direction.length === 1) {
                var mPath = [
                    ["M", pathLength * one.row, pathLength * one.col],
                    ["L", pathLength * one.path[j].row, pathLength * one.path[j].col]
                ];

                paper.path(mPath).attr({
                    stroke: mColor[one.path[j].direction],
                    "stroke-width": pathStrokeWidth,
                    "stroke-linecap": "round"
                });
            } else {
                var mPath = [
                    ["M", pathLength * one.row, pathLength * one.col],
                    ["L", pathLength * one.path[j].row, pathLength * one.path[j].col]
                ];

                paper.path(mPath).attr({
                    stroke: mColor[one.path[j].direction[0]],
                    "stroke-width": pathStrokeWidth,
                    "stroke-linecap": "round"
                });
                var mPath2 = [
                    ["M", pathLength * one.row, pathLength * one.col],
                    ["L", pathLength * one.path[j].row, pathLength * one.path[j].col]
                ];

                paper.path(mPath2).attr({
                    stroke: "#FFF",
                    "stroke-width": 2,
                    "stroke-linecap": "round"
                });
            }
        }
    }

    var circleThree = paper.set();
    var circleOne = paper.set();
    var circleTwo = paper.set();
    var circleOneSize = 10;
    var circleTwoSize = 8;
    var circleThreeSize = 15;

    function DrawFonts(_fontColor, _fonts, _fontSizeTW, _fontSizeEN, _paper) {
        this.fontColor = _fontColor;
        this.fonts = _fonts;
        this.fontSizeTW = _fontSizeTW;
        this.fontSizeEN = _fontSizeEN;
        this.paper = _paper;
        this.fontTwX = 0;
        this.fontTwY = 0;
        this.fontEnX = 0;
        this.fontEnY = 0;
        this.fontTW = "";
        this.fontEN = "";
        this.textAnchor = "";
    }
    DrawFonts.prototype.drawFont = function() {
        var tmp = (Obj[i].nameEN.length * (this.fontSizeEN * 0.9)) / 2.0 + circleOneSize / 2.0;
        this.paper.text(this.fontTwX, this.fontTwY, this.fontTW).attr({
            fill: this.fontColor,
            "font-family": this.fonts,
            "font-size": this.fontSizeTW,
            'text-anchor': this.textAnchor
        });
        this.paper.text(this.fontEnX, this.fontEnY, this.fontEN).attr({
            fill: this.fontColor,
            "font-family": this.fonts,
            "font-size": this.fontSizeEN,
            'text-anchor': this.textAnchor
        });
    };

    var mDrawFonts = new DrawFonts("#000", "Arial, Helvetica, sans-serif", 14, 10, paper);
    var tmpEN, tmpTW;
    for (i = 0; i < objLength; i++) {
        switch (Obj[i].txtDirection) {
            case 1:
                mDrawFonts.textAnchor = "start";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row) + circleOneSize * 0.8;
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) - (circleOneSize * 3.0);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row) + circleOneSize * 0.8;
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) - (circleOneSize * 1.5);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
            case 2:
                mDrawFonts.textAnchor = "start";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row) + circleOneSize * 1.5;
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) - (circleOneSize * 0.75);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row) + circleOneSize * 1.5;
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) + (circleOneSize * 0.75);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
            case 3:
                mDrawFonts.textAnchor = "start";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row) + circleOneSize * 0.8;
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) + (circleOneSize * 1.8);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row) + circleOneSize * 0.8;
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) + (circleOneSize * 3.3);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
            case 4:
                mDrawFonts.textAnchor = "middle";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row);
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) + (circleOneSize * 2.0);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row);
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) + (circleOneSize * 3.5);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
            case 5:
                mDrawFonts.textAnchor = "end";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row) - circleOneSize * 0.8;
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) + (circleOneSize * 1.8);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row) - circleOneSize * 0.8;
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) + (circleOneSize * 3.3);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
            case 6:
                mDrawFonts.textAnchor = "end";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row) - circleOneSize * 1.5;
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) - (circleOneSize * 0.75);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row) - circleOneSize * 1.5;
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) + (circleOneSize * 0.75);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
            case 7:
                mDrawFonts.textAnchor = "end";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row) - circleOneSize * 0.8;
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) - (circleOneSize * 3.0);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row) - circleOneSize * 0.8;
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) - (circleOneSize * 1.5);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
            case 8:
                mDrawFonts.textAnchor = "middle";
                mDrawFonts.fontTwX = (pathLength * Obj[i].row);
                mDrawFonts.fontTwY = (pathLength * Obj[i].col) - (circleOneSize * 3.5);
                mDrawFonts.fontEnX = (pathLength * Obj[i].row);
                mDrawFonts.fontEnY = (pathLength * Obj[i].col) - (circleOneSize * 2.0);
                mDrawFonts.fontEN = Obj[i].nameEN;
                mDrawFonts.drawFont();
                break;
        }

        circleOne.push(
            paper.circle(pathLength * (Obj[i].row), pathLength * (Obj[i].col), circleOneSize)
            .attr({
                stroke: "#000",
                "stroke-width": 2
            })
            .data("obj", Obj[i])
        );
        circleTwo.push(
            paper.circle(pathLength * (Obj[i].row), pathLength * (Obj[i].col), circleTwoSize)
            .attr({
                fill: "#FFF",
                stroke: "#FFF",
                "stroke-width": 2
            })
            .data("obj", Obj[i])
        );
        circleThree.push(
            paper.circle(pathLength * (Obj[i].row), pathLength * (Obj[i].col), circleThreeSize)
            .attr({
                fill: "#FFF",
                "fill-opacity": 0,
                "stroke-width": 0
            })
            .data("obj", Obj[i])
        );

        circleThree[i].mouseup(function() {
            if (mStart === -1) {
                for (var i = testPath.length - 1; i >= 0; i--) {
                    var s = testPath.pop();
                    s.animate({
                        fill: "#FFF"
                    }, 100);
                }
                mStart = this.getData().obj.id;
                circleTwo[mStart].animate({
                    fill: "#2ECCFA"
                }, 100);
                testPath.push(circleTwo[mStart]);
            } else if (mEnd === -1) {
                if (mStart === this.getData().obj.id) return;
                mEnd = this.getData().obj.id;
                circleTwo[mEnd].animate({
                    fill: "#2ECCFA"
                }, 100);
                testPath.push(circleTwo[mEnd]);
                var Distance = new Array(ObjMatrix[0].length);
                var prev = new Array(ObjMatrix[0].length);
                var allPath = pathPlanning.dijkstra(ObjMatrix, mStart, ObjMatrix[0].length, Distance, prev, mEnd);

                var allPathLength = allPath.path.length;
                for (var j = 1; j < allPathLength - 1; j++) {
                    var circleAnimate = circleTwo[allPath.path[j]];
                    circleAnimate.animate({
                        fill: "#2ECCFA"
                    }, 100);
                    testPath.push(circleAnimate);
                }
                mStart = -1;
                mEnd = -1;
            }

        });


    }
};
