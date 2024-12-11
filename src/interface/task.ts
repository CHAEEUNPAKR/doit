export interface Task {
  id: number;
  tenantId: string;
  name: string;
  memo?: string | "";
  imageUrl?: string | "";
  isCompleted: boolean;
}
