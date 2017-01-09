export const filterSearch = (state, filterState )=> {
    let filteredState = state.filter( article => {
        console.log(article.id);
        return (article.author.toLowerCase().indexOf(filterState.toLowerCase()) !== -1) ||
               (article.id == filterState) ||
               (article.text.toLowerCase().indexOf(filterState.toLowerCase()) !== -1) ||
               (article.tags.join(',').toLowerCase().indexOf(filterState.toLowerCase()) !== -1) ||
               (article.header.toLowerCase().indexOf(filterState.toLowerCase()) !== -1);
    });
    return filteredState;
};
