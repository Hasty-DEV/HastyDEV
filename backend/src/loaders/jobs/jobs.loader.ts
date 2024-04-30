import cron from 'node-cron';
import { sendInactiveUserEmails } from '../../jobs/InactiveUserEmails/InactiveUserEmails.jobs';

class Jobs {
    public static Loader(): void {
        this.loadInactiveUserEmail();
    }

    private static loadInactiveUserEmail(): void {
        cron.schedule('00 12 * * *', () => {
            sendInactiveUserEmails();
        });
    }
}

export default Jobs;