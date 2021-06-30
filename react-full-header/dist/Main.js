Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FullHeader = function FullHeader(_ref) {
    var title = _ref.title;

    return _react2["default"].createElement(
        "header",
        null,
        title && _react2["default"].createElement(
            "h1",
            null,
            title
        )
    );
};

exports["default"] = FullHeader;