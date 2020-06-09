import React from 'react';
import SearchResult from './search-result';

import './search-results.css';

function SearchResults() {
  return (
    <div className="search-results">
      <SearchResult
        title="Police shoot tear gas canister at man from close range, striking him in the chest"
        location="Washington, DC"
        date="June 6th, 2020"
      />
      <SearchResult
        title="Law enforcement shoot and throw tear gas at protesters"
        location="Dallas, TX"
        date="May 30th, 2020"
      />
      <SearchResult
        title="Police shoot tear gas at peaceful protestors who have their hands up"
        location="Atlanta, GA"
        date="May 26th, 2020"
      />
      <SearchResult
        title="Police fire tear gas and rubber bullets on peaceful assembly"
        location="Minneapolis, MN"
        date="May 25th, 2020"
      />
    </div>
  );
}

export default SearchResults;
