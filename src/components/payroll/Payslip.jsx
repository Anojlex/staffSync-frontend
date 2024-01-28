import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
const Payslip = ({ open, closeSlip, employee, salary }) => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    if (salary.basic === undefined) {
        closeSlip()
    }
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column', // Change to column to stack sections vertically
            backgroundColor: '#ffff',
            padding: 20,
        },
        companyInfo: {
            textAlign: 'right',
            fontSize: 12,
            marginTop: 10,

        },
        companyDetails: {
            textAlign: 'right',
            fontSize: 8,

        },
        pageOutline: {
            paddingTop: 50,
        },
        outerSection: {
            flexDirection: 'row', // Change to column to stack sections vertically
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 10,
            // Border for the outer section
        },
        mainHeading: {
            flexDirection: 'row', // Change to column to stack sections vertically
            justifyContent: 'space-between',
        },
        totalSection: {
            flexDirection: 'row', // Change to column to stack sections vertically
            justifyContent: 'space-between',
            width: '100%',
            // Border for the total section
            border: '0.5px solid #000',
            height: 20,
        },

        totalLabel: {
            fontWeight: 'bold',
            fontSize: 10,
            borderRight: '0.5px solid #000', // Border for the labels
            width: '80%',
            borderBottom: '0.5px solid #000', // Border for the labels
            paddingLeft: 5,
            paddingTop: 5,
            borderLeft: '0.5px solid #000', // Border for the labels
            backgroundColor: '#e2e8f0',

        },
        totalValue: {
            paddingLeft: 5,
            fontSize: 10,
            borderBottom: '0.5px solid #000', // Border for the values
            width: '20%',
            paddingTop: 5,
            backgroundColor: '#e2e8f0',
        },
        netSalary: {
            flexDirection: 'row', // Change to column to stack sections vertically
            justifyContent: "flex-end",
            marginTop: 10,
        },
        netRow: {
            width: '30%',
            flexDirection: 'column'
        },
        netLabel: {
            backgroundColor: '#e2e8f0',
            border: '0.5px solid #000',
            padding: 5,
            fontSize: 12,
            height: 25,

        },
        netValue: {
            border: '0.5px solid #000',
            padding: 5,
            fontSize: 12,
            height: 25,
        },
        section: {
            marginBottom: 10,
            flexGrow: 1,
            width: '40%',
            border: '0.5px solid #000', // Border for the section
        },
        header: {
            fontSize: 12,

            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: '#0080c0',
            color: '#fff',
            padding: 5,
            height: 25,

        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 20,
        },
        label: {
            fontWeight: 'bold',
            fontSize: 10,
            borderRight: '0.5px solid #000', // Border for the labels
            width: '80%',
            borderBottom: '0.5px solid #000', // Border for the labels
            paddingLeft: 5,
            paddingTop: 5,

        },
        value: {
            paddingLeft: 5,
            fontSize: 10,
            borderBottom: '0.5px solid #000', // Border for the values
            width: '20%',
            paddingTop: 5,

        },
        totalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTop: '0.5px solid #000', // Border for the total row

        },
        netSalarySection: {
            borderTop: '0.5px solid #000', // Border for the net salary section
            paddingTop: 10,
        },
    });

    const MyDocument = () => (

        < Document >
            <Page size="A4" style={styles.page}>
                <View style={styles.pageOutline}>
                    <View style={styles.mainHeading} >
                        <View>
                            <Text style={styles.companyInfo}>PaySlip</Text>

                        </View>
                        <View>
                            <Text style={styles.companyInfo}>Costafashions PVT LTD</Text>
                            <Text style={styles.companyDetails}>2nd floor ,Lulu Shopping mall</Text>
                            <Text style={styles.companyDetails}>Edappally,Kochi</Text>
                        </View>
                    </View>
                    <View style={styles.outerSection}>
                        <View style={styles.section}>
                            <Text style={styles.header}>Employee Details</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>Employee Name</Text>
                                <Text style={styles.value}>{employee.firstname + employee.lastname}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Employee ID</Text>
                                <Text style={styles.value}>{employee.empID}</Text>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.header}></Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>Designation</Text>
                                <Text style={styles.value}>{employee.designation}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Department:</Text>
                                <Text style={styles.value}>{employee.department}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Month:</Text>
                                <Text style={styles.value}>{currentMonth}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Year:</Text>
                                <Text style={styles.value}>{currentYear}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.outerSection}>
                        <View style={styles.section}>
                            <Text style={styles.header}>Earnings</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>Basic Salary</Text>
                                <Text style={styles.value}>{salary.basic}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>House Rent Allowance:</Text>
                                <Text style={styles.value}>{salary.hra}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Dearness Allowance:</Text>
                                <Text style={styles.value}>{salary.da}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Personal Allowance:</Text>
                                <Text style={styles.value}>{salary.pa}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Special Allowance:</Text>
                                <Text style={styles.value}>{salary.spa}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Medical Allowance:</Text>
                                <Text style={styles.value}>{salary.medical}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Conveyance Allowance:</Text>
                                <Text style={styles.value}>{salary.conveyance}</Text>
                            </View>

                        </View>

                        <View style={styles.section}>
                            <Text style={styles.header}>Deductions</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>Provident Fund:</Text>
                                <Text style={styles.value}>{salary.epf}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Professional Tax:</Text>
                                <Text style={styles.value}>{salary.pt}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Income Tax:</Text>
                                <Text style={styles.value}>{salary.it}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.totalSection}>
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Total Earnings:</Text>
                            <Text style={styles.totalValue}>{salary.totalEarnings}</Text>
                        </View>
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Total Deductions:</Text>
                            <Text style={styles.totalLabel}>{salary.totalDeductions}</Text>
                        </View>
                    </View>
                    <View style={styles.netSalary}>
                        <View style={styles.netRow}>
                            <Text style={styles.netLabel}>Net Salary </Text>
                            <Text style={styles.netValue}>{salary.netSalary}</Text>
                        </View>

                    </View>


                </View>
            </Page>
        </Document >

    );

    return (
        <>
            {
                open && (

                    < div className='fixed top-0 left-0 h-full w-full flex-col justify-center items-center z-30 bg-[#3c3a3aaf]' >
                        <div className='flex justify-end m-10'>
                            <img
                                className='w-6 h-6  rounded-full'
                                onClick={closeSlip}
                                src="https://img.icons8.com/ios-filled/50/FD7E14/cancel.png"
                                alt="Cancel"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <PDFViewer width="60%" height="750px">
                                <MyDocument />
                            </PDFViewer>
                        </div>
                    </div >
                )
            }
        </>
    )
};

export default Payslip;
