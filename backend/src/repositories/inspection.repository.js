const pool = require("../config/db");

const createInspectionRepository = async (inspectionData) => {
    const query = `INSERT INTO inspections 
                        (inspection_date, machine_id, defect_type, severity, remarks)
                    VALUES 
                        ($1,$2,$3,$4,$5)
                    RETURNING *`;
    const { inspection_date, machine_id, defect_type, severity, remarks } = inspectionData;
    const values = [
        inspection_date,
        machine_id,
        defect_type,
        severity,
        remarks
    ];

    const { rows } = await pool.query(query, values);

    return rows[0];

}

module.exports = {
    createInspectionRepository
}
