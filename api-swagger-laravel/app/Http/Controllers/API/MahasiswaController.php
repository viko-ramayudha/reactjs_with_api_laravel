<?php 
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Symfony\Component\HttpFoundation\Response;

class MahasiswaController extends Controller {

    /**
    * @OA\Get (
    *     path="/mahasiswa",
    *     tags={"Mahasiswa"},
    *     operationId="listMahasiswa",
    *     summary="Mahasiswa - Get All",
    *     description="Mengambil Data Mahasiswa",
    *     security={ { "bearerAuth": {} } },
    *     @OA\Response(
    *         response="200",
    *         description="OK",
    *         @OA\JsonContent(
    *             example={
    *                 "success": true,
    *                 "message": "Berhasil mengambil Data Mahasiswa",
    *                 "data": {
    *                     {
    *                         "mhs_nim": "80224020",
    *                         "mhs_nama": "Mukhamad Viko Ramayudha"
    *                     }
    *                 }
    *             }
    *         )
    *     )
    * )
    */
    public function listMahasiswa() {
        $success = true;
        $message = 'Berhasil mengambil Data Mahasiswa';
        $data = Mahasiswa::all();

        return response()->json([
            'success' => $success,
            'message' => $message,
            'data'    => $data
        ], 200);
    }

    /**
    * @OA\Get(
    *     path="/mahasiswa/{id}",
    *     tags={"Mahasiswa"},
    *     operationId="listMahasiswaById",
    *     summary="Mahasiswa - Get By NIM",
    *     description="Mengambil Data Mahasiswa Berdasarkan NIM",
    *     security={ { "bearerAuth": {} } },
    *     @OA\Parameter(
    *         @OA\Schema(
    *             type="string",
    *         ),
    *         description="Masukkan NIM Mahasiswa",
    *         example="80224020",
    *         in="path",
    *         name="id",
    *         required=true,
    *     ),
    *     @OA\Response(
    *         response="200",
    *         description="OK",
    *         @OA\JsonContent(
    *             example={
    *                 "success": true,
    *                 "message": "Berhasil mengambil Data Mahasiswa",
    *                 "data": {
    *                     "mhs_nim": "80224020",
    *                     "mhs_nama": "Mukhamad Viko Ramayudha"
    *                 }
    *             }
    *         )
    *     ),
    *     @OA\Response(
    *         response="404",
    *         description="Data Mahasiswa tidak ditemukan",
    *         @OA\JsonContent(
    *             example={
    *                 "success": false,
    *                 "message": "Data Mahasiswa tidak ditemukan",
    *             }
    *         )
    *     )
    * )
    */
    public function listMahasiswaById($id) {
        try {
            $success = true;
            $message = 'Berhasil mengambil Data Mahasiswa';
            $data = Mahasiswa::where('mhs_nim', $id)->first();

            if (!$data) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data Mahasiswa tidak ditemukan',
                ], 404);
            }

            return response()->json([
                'success' => $success,
                'message' => $message,
                'data' => $data,
            ], 200);
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
    * @OA\Post(
    *     path="/mahasiswa/create",
    *     tags={"Mahasiswa"},
    *     operationId="insertMahasiswa",
    *     summary="Mahasiswa - Insert",
    *     description="Menambahkan Data Mahasiswa",
    *     security={ { "bearerAuth": {} } },
    *     @OA\RequestBody(
    *         required=true,
    *         description="Data Mahasiswa",
    *         @OA\JsonContent(
    *             example={
    *                 "mhs_nim": "80224020",
    *                 "mhs_nama": "Mukhamad Viko Ramayudha"
    *             }
    *         )
    *     ),
    *     @OA\Response(
    *         response="201",
    *         description="Created",
    *         @OA\JsonContent(
    *             example={
    *                 "success": true,
    *                 "message": "Berhasil menambahkan Data Mahasiswa",
    *                 "data": {
    *                     "mhs_nim": "80224020",
    *                     "mhs_nama": "Mukhamad Viko Ramayudha"
    *                 }
    *             }
    *         )
    *     ),
    *     @OA\Response(
    *         response="422",
    *         description="Unprocessable Entity",
    *         @OA\JsonContent(
    *             example={
    *                 "mhs_nim": {"The mhs nim field is required."},
    *                 "mhs_nama": {"The mhs nama field is required."}
    *             }
    *         )
    *     )
    * )
    */
    public function insertMahasiswa(Request $request) {
        $validator = Validator::make($request->all(), [
            'mhs_nim' => 'required',
            'mhs_nama' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $success = true;
            $message = "Berhasil menambahkan Data Mahasiswa";
            $result = Mahasiswa::create($request->all());
            $data = $result;

            return response()->json([
                'success' => $success,
                'message' => $message,
                'data' => $data,
            ], 201);
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\Put(
     *     path="/mahasiswa/update",
     *     tags={"Mahasiswa"},
     *     operationId="updateMahasiswa",
     *     summary="Mahasiswa Update",
     *     description="Update data Mahasiswa",
     *     security={{"bearerAuth": {}}},
     *     @OA\RequestBody(
     *         required=true,
     *         description="Request Body Description",
     *         @OA\JsonContent(
     *             example={
     *                 "mhs_nim": "80224020",
     *                 "mhs_nama": "Mukhamad Viko Ramayudha"
     *             }
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Ok",
     *         @OA\JsonContent(
     *             example={
     *                 "success": true,
     *                 "message": "Data berhasil diubah"
     *             }
     *         )
     *     )
     * )
     */
    public function updateMahasiswa(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'mhs_nim' =>'required',
            'mhs_nama' =>'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $success = true;
        $message = 'Berhasil Mengubah Data Mahasiswa';

        $data = array(
            'mhs_nama' => $request->input('mhs_nama')
        );

        $id = $request->input('mhs_nim');
        $result = Mahasiswa::where('mhs_nim', $id)->update($data);

        return response()->json([
            'success' => $success,
            'message' => $message
        ], 200);
    }

  /**
 * @OA\Delete(
 *     path="/mahasiswa/delete",
 *     tags={"Mahasiswa"},
 *     operationId="deleteMahasiswa",
 *     summary="Mahasiswa Delete",
 *     description="Hapus data Mahasiswa",
 *     security={{"bearerAuth": {}}},
 *     @OA\RequestBody(
 *         required=true,
 *         description="ID Mahasiswa yang ingin dihapus",
 *         @OA\JsonContent(
 *             example={
 *                 "mhs_nim": "80224020"
 *             }
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Ok",
 *         @OA\JsonContent(
 *             example={
 *                 "success": true,
 *                 "message": "Data berhasil dihapus"
 *             }
 *         )
 *     )
 * )
 */
public function deleteMahasiswa(Request $request)
{
    $validator = Validator::make($request->all(), [
        'mhs_nim' =>'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $id = $request->input('mhs_nim');
    $result = Mahasiswa::where('mhs_nim', $id)->delete();

    if ($result) {
        $success = true;
        $message = 'Berhasil Menghapus Data Mahasiswa';
    } else {
        $success = false;
        $message = 'Gagal Menghapus Data Mahasiswa';
    }

    return response()->json([
        'success' => $success,
        'message' => $message
    ], 200);
}

}
?>