export type ApiResponse<T= unknown> = 
    |{ success: true; data: T; status: number; } // 200 or 201 response 
    |{ success: false; message: string; status: number; } // error responses