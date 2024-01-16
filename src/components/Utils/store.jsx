import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeeReducer from "./employeeSlice";
import adminReducer from "./adminSlice";
import leaveReducer from "./leaveSlice";


const employeePersistConfig = {
    key: "employee",
    storage,
};

const adminPersistConfig = {
    key: "admin",
    storage,
};
const leavePersistConfig = {
    key: "leave",
    storage,
}

const persistedEmployeeReducer = persistReducer(
    employeePersistConfig,
    employeeReducer
);

const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer);

const persistedLeaveReducer = persistReducer(leavePersistConfig, leaveReducer);

const store = configureStore({
    reducer: {
        employee: persistedEmployeeReducer,
        admin: persistedAdminReducer,
        leave: persistedLeaveReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { store, persistor };
