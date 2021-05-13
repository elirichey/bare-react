import BodyNav from "./BodyNav";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  account: state.account,
  showSidebar: state.showSidebar,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyNav);
