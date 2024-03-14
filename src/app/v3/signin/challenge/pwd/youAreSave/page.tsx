import React from 'react';
import './page.scss'
const Page = () => {
    return (
        <main className='main'>
            <div className='cloud'>
                <div className='center'>
                    <h2>Были приняты меры по устранению угрозы. Можете закрыть данное окно</h2>
                    <div className='right'>
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <span className="icon-line line-tip"></span>
                                <span className="icon-line line-long"></span>
                                <div className="icon-circle"></div>
                                <div className="icon-fix"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default Page;