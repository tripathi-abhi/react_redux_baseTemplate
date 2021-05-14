import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUnresolvedBugs, loadBugs, markResolveBug } from "../store/bugs";

const Bugs = props => {
	const { bugs, markResolveBug } = props;

	useEffect(() => {
		props.loadBugs();
	}, [props]);

	return (
		<div>
			<ul>
				{bugs?.map(bug => (
					<li key={bug.id}>
						{bug.description}
						<button onClick={() => markResolveBug(bug.id)}>Resolve</button>
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = state => ({
	bugs: getUnresolvedBugs(state),
});

const mapDispatchToProps = dispatch => ({
	loadBugs: () => dispatch(loadBugs()),
	markResolveBug: id => dispatch(markResolveBug(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
