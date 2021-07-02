import React from 'react'

function ProductPage() {
    const products = [   
        {
           "id": 3562,
           "uid": "40f275fb-65ff-4765-98f5-498bc50852af",
           "build_number": 222,
           "manufacturer": "ASUS",
           "model": "Samsung Galaxy S9",
           "platform": "Android OS",
           "serial_number": "tL&^J@24CVF=zP46Lxixk`_a#=o6c5",
           "version": 174
        },   
        {
           "id": 3598,
           "uid": "6aca8c09-db7a-4cbb-8bc8-d7b832065c17",
           "build_number": 73,
           "manufacturer": "Lenovo",
           "model": "Samsung Galaxy S7",
           "platform": "Windows 8.1",
           "serial_number": "hHhDJaHCO",
           "version": 463
        },   
        {
           "id": 8518,
           "uid": "8b5f69cc-3b89-4713-a18f-7ec4b35d2c64",
           "build_number": 96,
           "manufacturer": "OnePlus",
           "model": "Samsung Galaxy S7 Edge",
           "platform": "webOS",
           "serial_number": "Yr9Vt13BlgvXO9zgJTPuCLv6F82r5S",
           "version": 310
        },   
        {
           "id": 270,
           "uid": "e9f9f6e4-c281-4c5e-b0c1-d52827d4cec2",
           "build_number": 374,
           "manufacturer": "OnePlus",
           "model": "iPhone",
           "platform": "Windows 8.1",
           "serial_number": "CdNevWfqDPQw4iJgUhtyCqwCggV12T",
           "version": 417
        },   
        {
           "id": 8941,
           "uid": "1c17d125-f01e-4cd2-bd72-da382055f450",
           "build_number": 218,
           "manufacturer": "Xiamomi",
           "model": "iPhone 6S / 6S Plus",
           "platform": "Windows 10 Mobile",
           "serial_number": "39gPmcOKpwhDezLdiIOZ7SH89Pbjp4",
           "version": 830
        },   
        {
           "id": 1294,
           "uid": "60e6ca6b-ae07-497e-9774-337b76a9ac62",
           "build_number": 414,
           "manufacturer": "Apple",
           "model": "OnePlus 6T",
           "platform": "Windows RT",
           "serial_number": "hHhDJaHCO",
           "version": 824
        },   
        {
           "id": 9487,
           "uid": "4e7112a7-67df-4f86-922a-d5f52146adc5",
           "build_number": 369,
           "manufacturer": "Apple",
           "model": "Xiaomi Pocophone F1",
           "platform": "Danger OS",
           "serial_number": "hrR8nflThDDaSXO",
           "version": 328
        },   
        {
           "id": 5646,
           "uid": "a5c06841-156a-45f5-916c-8dd524a3d9ba",
           "build_number": 53,
           "manufacturer": "Huawei",
           "model": "iPhone 5S",
           "platform": "Windows 10 Mobile",
           "serial_number": "39gPmcOKpwhDezLdiIOZ7SH89Pbjp4",
           "version": 784
        },   
        {
           "id": 6637,
           "uid": "cab852b7-d012-4772-92e8-f14ac1a1eefa",
           "build_number": 173,
           "manufacturer": "ASUS",
           "model": "Huawei P10",
           "platform": "BlackBerry",
           "serial_number": "hrR8nflThDDaSXO",
           "version": 751
        },   
        {
           "id": 9025,
           "uid": "be093640-5822-4b0b-be88-7455f18f58dd",
           "build_number": 312,
           "manufacturer": "Lenovo",
           "model": "Samsung Galaxy S7 Edge",
           "platform": "Windows 10",
           "serial_number": "trDuJXhT8PnD3JEtw4lsluEuYSn1Xh",
           "version": 543
        }
     ]
    return (
        <div className="container-fluid mb-4">
            <div className="card shadow">
                <div className="card-header">
                    <h4 className="float-left text-info">Products</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-info table-striped" style={{borderRadius:"10px"}}>
                            <thead style={{color:"rgb(105, 54, 156)"}}>
                                <tr>
                                <th scope="col">UserId</th>
                                <th scope="col">Build Number</th>
                                <th scope="col">Manufacturer</th>
                                <th scope="col">Model</th>
                                <th scope="col">Platform</th>
                                <th scope="col">Version</th>
                                </tr>
                            </thead>
                            <tbody  style={{color:"rgba(110, 71, 145, 0.966)"}}>
                            {
                                products.map(product => {
                                    return (
                                        <tr key ={product.id}>
                                            <th scope="row">{product.id}</th>
                                            <td>{product.build_number}</td>
                                            <td>{product.manufacturer}</td>
                                            <td>{product.model}</td>
                                            <td>{product.platform}</td>
                                            <td>{product.version}</td>   
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
