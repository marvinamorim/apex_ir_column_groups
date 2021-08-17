const IRColumnGroups = function() {
	let report = {};
	async function init() {
		const ajaxCallback = this.action.ajaxIdentifier;
		report.id = this.action.attribute01;
		console.log('Initing IRColumnsGroup for', "#"+report.id);
		var args = { x01: report.id };
		var columnGroups = await apex.server.plugin(ajaxCallback, args,{dataType:""});
		groupedCols = groupColumns(columnGroups);
		createGroupsHTML(groupedCols);
	}

	function groupColumns(ungroupedData) {
		let groupCols = [];
		ungroupedData.map(function(data) {
			let i = groupCols.map(group => { return group.group }).indexOf(data.group);
			if (i < 0) groupCols.push({group:data.group, columns:[data.column]})
			else groupCols[i].columns.push(data.column);
		});
		return groupCols;
	}

	function createGroupsHTML(groupCols) {
		var $tr = $("<tr></tr>");
		var lastIndex = 1;
		groupCols.map(thisGroup => {
			var i = 1;
			var firstGroupColumn = thisGroup.columns[0];
			$(`#${report.id} .t-fht-thead .a-IRR-header`)
			.each(function(){
				let $th = $(this);
				var $header = $th.find(".a-IRR-headerLink").length ?
											$th.find(".a-IRR-headerLink") :
											$th.find(".a-IRR-headerLabel");
				let text = $($header.contents()[0]).text();
				if (text == firstGroupColumn) return false;
				else i++;
			});
			if (i > lastIndex) {
				$tr.append($(`<td colspan="${i-lastIndex}"></td>`));
				lastIndex = i;
			}
			colspan = thisGroup.columns.length;
			lastIndex = i+colspan;
			$tr.append($(`<td align="center" colspan="${colspan}">${thisGroup.group}</td>`));
		});
		$(`#${report.id} .t-fht-thead table`).prepend($tr.clone());
	}

	return {
		init
	}
}();
//# sourceMappingURL=IRColumnsGroup.js.map
