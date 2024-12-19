<?php 
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Trainer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Symfony\Component\HttpFoundation\Response;

class TrainerController extends Controller {

    /**
    * @OA\Get (
    *     path="/trainer",
    *     tags={"Trainer"},
    *     operationId="listtrainer",
    *     summary="Trainer - Get All",
    *     description="Mengambil Data Trainer",
    *     security={ { "bearerAuth": {} } },
    *     @OA\Response(
    *         response="200",
    *         description="OK",
    *         @OA\JsonContent(
    *             example={
    *                 "success": true,
    *                 "message": "Berhasil mengambil Data Trainer",
    *                 "data": {
    *                     {
    *                         "id": "1",
    *                         "nama": "Mukhamad Viko Ramayudha",
    *                         "email": "ramaydha@dummy.com",
    *                         "password": "******",
    *                         "no_hp": "62813320200",
    *                         "status": "1",
    *                     }
    *                 }
    *             }
    *         )
    *     )
    * )
    */
    public function listTrainer() {
        $success = true;
        $message = 'Berhasil mengambil Data Trainer';
        $data = Trainer::all();

        return response()->json([
            'success' => $success,
            'message' => $message,
            'data'    => $data
        ], 200);
    }

    /**
    * @OA\Get(
    *     path="/trainer/{id}",
    *     tags={"Trainer"},
    *     operationId="listTrainerById",
    *     summary="Trainer - Get By Id",
    *     description="Mengambil Data Trainer Berdasarkan ID",
    *     security={ { "bearerAuth": {} } },
    *     @OA\Parameter(
    *         @OA\Schema(
    *             type="string",
    *         ),
    *         description="Masukkan ID Trainer",
    *         example="1",
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
    *                 "message": "Berhasil mengambil Data Trainer",
    *                 "data": {
    *                     "id": "1",
*                         "nama": "Mukhamad Viko Ramayudha",
*                         "email": "ramaydha@dummy.com",
*                         "password": "******",
*                         "no_hp": "62813320200",
*                         "status": "1",
    *                 }
    *             }
    *         )
    *     ),
    *     @OA\Response(
    *         response="404",
    *         description="Data Trainer tidak ditemukan",
    *         @OA\JsonContent(
    *             example={
    *                 "success": false,
    *                 "message": "Data Trainer tidak ditemukan",
    *             }
    *         )
    *     )
    * )
    */
    public function listTrainerById($id) {
        try {
            $success = true;
            $message = 'Berhasil mengambil Data Trainer';
            $data = Trainer::where('id', $id)->first();

            if (!$data) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data Trainer tidak ditemukan',
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
    *     path="/trainer/create",
    *     tags={"Trainer"},
    *     operationId="insertTrainer",
    *     summary="Trainer - Insert",
    *     description="Menambahkan Data Trainer",
    *     security={ { "bearerAuth": {} } },
    *     @OA\RequestBody(
    *         required=true,
    *         description="Data Trainer",
    *         @OA\JsonContent(
    *             example={
    *                 "nama": "Mukhamad Viko Ramayudha",
    *                 "email": "ramaydha@dummy.com",
    *                 "password": "******",
    *                 "no_hp": "62813320200",
    *                 "status": "1",
    *             }
    *         )
    *     ),
    *     @OA\Response(
    *         response="201",
    *         description="Created",
    *         @OA\JsonContent(
    *             example={
    *                 "success": true,
    *                 "message": "Berhasil menambahkan Data Trainer",
    *                 "data": {
    *                     "id": "",
    *                      "nama": "Mukhamad Viko Ramayudha",
    *                      "email": "ramaydha@dummy.com",
    *                      "password": "******",
    *                      "no_hp": "62813320200",
    *                      "status": "1",
    *                 
    *                 }
    *             }
    *         )
    *     ),
    *     @OA\Response(
    *         response="422",
    *         description="Unprocessable Entity",
    *         @OA\JsonContent(
    *             example={
    *                 "id": {"The mhs nim field is required."},
    *                 "nama": {"The mhs nama field is required."},
    *                 "email": {"The mhs nama field is required."},
    *                 "password": {"The mhs nama field is required."},
    *                 "no_hp": {"The mhs nama field is required."},
    *                 "status": {"The mhs nama field is required."}
    *             }
    *         )
    *     )
    * )
    */
    public function insertTrainer(Request $request) {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'email' => 'required',
            'password' => 'required',
            'no_hp' => 'required',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $success = true;
            $message = "Berhasil menambahkan Data Trainer";
            $result = Trainer::create($request->all());
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
     *     path="/trainer/update",
     *     tags={"Trainer"},
     *     operationId="updateTrainer",
     *     summary="Trainer Update",
     *     description="Update data Trainer",
     *     security={{"bearerAuth": {}}},
     *     @OA\RequestBody(
     *         required=true,
     *         description="Request Body Description",
     *         @OA\JsonContent(
     *             example={
     *                 "id": "1",
     *                  "nama": "Mukhamad Viko Ramayudha",
     *                  "email": "ramaydha@dummy.com",
     *                  "password": "******",
     *                  "no_hp": "62813320200",
     *                  "status": "1",
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
    public function updateTrainer(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => '',
            'nama' => 'required',
            'email' => 'required',
            'password' => 'required',
            'no_hp' => 'required',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $success = true;
        $message = 'Berhasil Mengubah Data Trainer';

        $data = array(
            'nama' => $request->input('nama'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'no_hp' => $request->input('no_hp'),
            'status' => $request->input('status'),
        );

        $id = $request->input('id');
        $result = Trainer::where('id', $id)->update($data);

        return response()->json([
            'success' => $success,
            'message' => $message
        ], 200);
    }

  /**
 * @OA\Delete(
 *     path="/trainer/delete",
 *     tags={"Trainer"},
 *     operationId="deleteTrainer",
 *     summary="Trainer Delete",
 *     description="Hapus data Trainer",
 *     security={{"bearerAuth": {}}},
 *     @OA\RequestBody(
 *         required=true,
 *         description="ID Trainer yang ingin dihapus",
 *         @OA\JsonContent(
 *             example={
*                 "id": "1"
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
public function deleteTrainer(Request $request)
{
    $validator = Validator::make($request->all(), [
        'id' =>'',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $id = $request->input('id');
    $result = Trainer::where('id', $id)->delete();

    if ($result) {
        $success = true;
        $message = 'Berhasil Menghapus Data Trainer';
    } else {
        $success = false;
        $message = 'Gagal Menghapus Data Trainer';
    }

    return response()->json([
        'success' => $success,
        'message' => $message
    ], 200);
}

}
?>