import React, { Component } from 'react';
import Header from './Header';
import ChartBlock from './ChartBlock';
import DetailBlock from './DetailBlock';
import TableBlock from './TableBlock';
import Share from '@tencent/ppo-fe/lib/Share';
import ImageZoomin from '@tencent/ppo-fe/lib/ImageZoomin';
import './style.css';

class AdDetail extends Component {
    render() {
        return (
            <div className="ad-detail-container">
                <Header />
                <div className="content">
                    <div className="chart-detail-block">
                        <ChartBlock />
                        <DetailBlock />
                    </div>
                    <TableBlock />
                </div>
                {/* <div>
                    <Share url="https://ads.app.wechat.com/" title="TIA" />
                    <ImageZoomin src={"http://pic-1252507790.file.myqcloud.com/96321943832412_0.jpg"} />
                </div> */}
            </div>
        );
    }
}

export default AdDetail;
