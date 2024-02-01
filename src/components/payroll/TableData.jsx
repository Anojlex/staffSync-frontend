import React from 'react';

const TableData = ({ employee, openSlip }) => {
    const basic = employee.salary?.basic;
    const hra = basic * employee.salary?.HRA / 100;
    const pa = basic * employee.salary?.PA / 100;
    const da = basic * employee.salary?.DA / 100;
    const spa = basic * employee.salary?.SPA / 100;
    const conveyance = basic * employee.salary?.conveyance / 100;
    const medical = basic * employee.salary?.medical / 100;
    const gratuity = basic * employee.salary?.gratuity / 100;
    const epf = basic * employee.salary?.EPF / 100;
    const pt = basic * employee.salary?.PT / 100;
    const it = basic * employee.salary?.IT / 100;

    const totalDeductions = (epf + pt + it).toFixed(2);
    const totalEarnings = (basic + hra + pa + da + spa + conveyance + medical + gratuity).toFixed(2);
    const netSalary = (totalEarnings - totalDeductions).toFixed(2);

    const salary = {
        basic,
        hra,
        pa,
        da,
        spa,
        conveyance,
        medical,
        gratuity,
        epf,
        pt,
        it,
        totalDeductions,
        totalEarnings,
        netSalary
    };

    const openPaySlip = () => {
        openSlip(employee, salary);
    };

    return (
        <div className='flex items-center border-b h-14 mt-3 bg-slate-200 text-xs font-normal rounded-xl'>
            <div className='flex-1 px-3 text-left'>{employee.firstname + employee.lastname}</div>
            <div className='flex-1 px-3 text-center'>{employee.empID}</div>
            <div className='flex-1 px-3 text-center'>{isNaN(totalEarnings) ? 0 : totalEarnings}</div>
            <div className='flex-1 px-3 text-center'>{isNaN(totalDeductions) ? 0 : totalDeductions}</div>
            <div className='flex-1 px-3 text-center'>{isNaN(netSalary ? 0 : netSalary)}</div>
            <div className='flex-1 px-3 justify-between'>
                <img className="w-5 h-5 ml-10" src='https://img.icons8.com/windows/32/download--v1.png' alt='' />
                <p onClick={openPaySlip} className='text-xs w-16 ml-5 text-center cursor-pointer hover:text-blue-500'>PaySlip</p>
            </div>

        </div>
    );
};

export default TableData;
