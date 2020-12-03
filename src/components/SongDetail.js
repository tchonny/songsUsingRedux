import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ songSelected }) => {
	//console.log(props);
	if (!songSelected) {
		return <div>Select a song</div>;
	}
	return (
		<div>
			<h3>Information</h3>
			<p>
				title: {songSelected.title}
				<br />
				duration: {songSelected.duration}
			</p>
		</div>
	);
	//	return <div>SongDetail</div>;
};

const mapToStateProp = (state) => {
	//console.log("State em song detail " + state);
	return { songSelected: state.selectedSong };
};

export default connect(mapToStateProp)(SongDetail);
