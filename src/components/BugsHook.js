import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs, markResolveBug } from "../store/bugs";

const BugsHook = () => {
	const dispatch = useDispatch();
	const bugs = useSelector(getUnresolvedBugs);

	useEffect(() => {
		dispatch(loadBugs());
	}, []);

	return (
		<ul>
			{bugs?.map(bug => (
				<li key={bug.id}>
					{bug.description}
					<button onClick={() => dispatch(markResolveBug(bug.id))}>
						Resolve
					</button>
				</li>
			))}
		</ul>
	);
};

export default BugsHook;
