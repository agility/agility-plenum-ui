// eslint-disable-next-line
const Enzyme = require("enzyme");
// eslint-disable-next-line
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

Enzyme.configure({ adapter: new Adapter() });
