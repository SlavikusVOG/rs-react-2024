const searchHistoryID = "search-history";

function getSearchHistory() {
  const result = localStorage.getItem(searchHistoryID);
  const data = result ? JSON.parse(result) : null;
  return data;
}

function setSearchHistory(history: Array<string>) {
  localStorage.setItem(searchHistoryID, JSON.stringify(history));
}

function addSearchString(value: string) {
  const searchHistory = getSearchHistory();
  if (searchHistory) {
    searchHistory.push(value);
  }
  setSearchHistory(searchHistory);
}

export default {
  getSearchHistory,
  addSearchString,
}
