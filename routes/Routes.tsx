import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import OpenRoutes from '@routes/OpenRoutes';
import ProtectedStackRoutes from '@routes/ProtectedStackRoutes';
import { credentialsActions } from '@store/actions';
import { StoreModel } from '@store/store';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Routes = () => {
    const token = useSelector(
        (state: StoreModel) => state.credentialReducer.token
    );

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        async function checkToken() {
            const details = await SecureStore.getItemAsync('details');
            if (!!details) {
                const parsedDetails: CredentialsSliceModel =
                    JSON.parse(details);
                dispatch(
                    credentialsActions.setCredentials({
                        phonenumber: parsedDetails.phonenumber!,
                        token: parsedDetails.token!,
                        merchantId: parsedDetails.merchantId!,
                        businessId: parsedDetails.businessId!,
                        businessName: parsedDetails.businessName!,
                        rating: parsedDetails.rating!,
                    })
                );
            }
            setLoading(false);
        }
        checkToken();
    }, [token]);

    return (
        <>
            {loading ? null : !!token ? (
                <ProtectedStackRoutes />
            ) : (
                <OpenRoutes />
            )}
        </>
    );
};

export default Routes;
