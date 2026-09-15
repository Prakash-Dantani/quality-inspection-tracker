const pool = require("../config/db");

const createInspectionRepository = async (inspectionData) => {
    const query = `INSERT INTO arvind.inspections 
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

const findAllRepository = async ({
    severity,
    status,
    from,
    to,
    sort = "desc",
}) => {

    let query = `
        SELECT *
        FROM arvind.inspections
    `;

    const conditions = [];
    const values = [];

    if (severity) {
        values.push(severity);
        conditions.push(`severity = $${values.length}`);
    }

    if (status) {
        values.push(status);
        conditions.push(`status = $${values.length}`);
    }

    if (from && to) {
        values.push(from);
        values.push(to);

        conditions.push(
            `inspection_date BETWEEN $${values.length - 1} AND $${values.length}`
        );
    }

    if (conditions.length > 0) {
        query += ` WHERE ${conditions.join(" AND ")}`;
    }

    query += ` ORDER BY inspection_date ${sort === "asc" ? "ASC" : "DESC"}`;

    const { rows } = await pool.query(query, values);

    return rows;
};

const findByIdRepository = async (id) => {

    const query = `
        SELECT *
        FROM inspections
        WHERE id = $1
    `;

    const { rows } = await pool.query(query, [id]);

    return rows[0];

};

const resolveInspectionRepository = async ({ id, resolution_note }) => {
    const query = `UPDATE arvind.inspections
                    SET
                        status = 'Resolved',
                        resolution_note = $1,
                        updated_at = NOW()
                    WHERE id = $2
                    RETURNING *`;
    const values = [
        resolution_note,
        id
    ];
    const { rows } = await pool.query(query, values);

    return rows[0];

}

module.exports = {
    createInspectionRepository, findAllRepository, resolveInspectionRepository, findByIdRepository
}
