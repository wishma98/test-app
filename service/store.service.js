import ApiRoutes from "../constants/api-routes";
import oogeInstance from "../hook/ooge-caompany-api";

export const kbsCreateNewStore = async (body) =>
  oogeInstance.post(`${ApiRoutes.CREATE_NEW_STORE}`, body);
export const kbsGetAllStorebyCompanyId = async (companyId) =>
  oogeInstance.get(`${ApiRoutes.GET_STORE_BY_COMPANY_ID}/${companyId}`);

export const kbsGetAllStores = async () =>
  oogeInstance.get(`${ApiRoutes.GET_ALL_STORES}`);

export const kbsGetAllProductByStoreId = async (
  storeId,
  pageNumber,
  pageSize
) =>
  oogeInstance.get(
    `${ApiRoutes.GET_PRODUCT_BY_STORE_ID}/${storeId}/${pageNumber}/${pageSize}`
  );
