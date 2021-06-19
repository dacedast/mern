import React, {Fragment} from 'react';

export const showLoading = () => (
    <Fragment>
    <div className="text-center m-5">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    </Fragment>
);

