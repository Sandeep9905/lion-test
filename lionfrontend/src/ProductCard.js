import React from 'react';

export default function ProductCard(props) {
    const { pimage, pcost, pname } = props;
    return (
        <>
            <div>
                <div class="card mb-3 product-card" >
                    <div class="row g-0">
                        <div class="col-md-4" style={{ margin: '4px', padding: '4px' }}>
                            <img className="product-image" src={pimage} alt={pname} />
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">{pname} (Upto 4 GB)</h5>
                                <p class="card-text">6000mAh | Quad Cam</p>
                                <p className="card-title"><h3>Rs: {pcost}</h3></p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}