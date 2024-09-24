// Inline Page
var opportunityId = Xrm.Page.data.entity.getId();
opportunityId = opportunityId.replace(/[{}]/g, "").toLowerCase();
var pageInput = {
    pageType: "custom",
    name: "crf8a_page1_082d8",
    entityName: "opportunity",
    idunico: opportunityId,
    recordId: opportunityId,
};
var navigationOptions = {
    target: 1
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when page opens
        }
    ).catch(
        function (error) {
            // Handle error
        }
    );