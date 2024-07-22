import { NextRequest, NextResponse } from "next/server";

const biometricData = {
    id: 1,
    deviceName: 'CAMS Biometric Device',
    employeeId: 'EMP001',
    timestamp: new Date().toISOString(),
    biometricInfor: {
        fingerprint: 'fingerprint_data',
        face: 'face',
        iris: 'iris'
    }
};

export async function POST(req: NextRequest) {
    try {
        console.log(req.body);
        const hello = req.body
        
        console.log('Recieved Biometric Data:', biometricData);
        return NextResponse.json({
            message: 'done',
            hello
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong'
        }, { status: 400 })
    }
}