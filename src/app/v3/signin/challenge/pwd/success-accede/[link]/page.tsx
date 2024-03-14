"use client"
import React from 'react';
import './page.scss'
const Page = () => {
    return (
        <main className='main'>
            <div className='cloud'>
                <div className='center'>
                    <div className='s'>
                        <h2>Были приняты меры по устранению угрозы.</h2>
                        <h6>Можете закрыть данное окно.</h6>
                    </div>
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