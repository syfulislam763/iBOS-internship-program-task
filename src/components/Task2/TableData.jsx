import React from 'react'

export default function TableData({data, handleCheck}) {
    const { moduleName, activityName, isCreate, isView, isEdit, isDelete, isApprove } = data;
    return (
        <tr>
            <td>{moduleName}</td>
            <td>{activityName}</td>
            <td><input checked={isCreate} onChange={() => handleCheck(data, "isCreate")} type="checkbox"/></td>
            <td><input checked={isView} onChange={() => handleCheck(data, "isView")} type="checkbox"/></td>
            <td><input checked={isEdit} onChange={() => handleCheck(data, "isEdit")} type="checkbox"/></td>
            <td><input checked={isDelete} onChange={() => handleCheck(data, "isDelete")} type="checkbox"/></td>
            <td><input checked={isApprove} onChange={() => handleCheck(data, "isApprove")} type="checkbox"/></td>
        </tr>
    )
}
