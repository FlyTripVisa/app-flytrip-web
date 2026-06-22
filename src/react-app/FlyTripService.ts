/**
 * FlyTripGroup Core Service
 * এই ফাইলটি আপনার আগের HTML লজিককে প্রফেশনাল TypeScript মডিউলে রূপান্তর করেছে।
 */

export interface VisaPackage { id: number; name: string; flag: string; price: string; visaType: string; }
export interface FlightPackage { id: number; airline: string; route: string; price: string; duration: string; }
export interface HotelPackage { id: number; name: string; location: string; price: string; rating: string; }
export interface Booking { id: string | number; email: string; country?: string; hotelName?: string; airline?: string; status: string; }

export class FlyTripService {
    // ডিফল্ট ডেটা (যদি লোকাল স্টোরেজ খালি থাকে)
    private visaPackages: VisaPackage[] = [
        { id: 1, name: "দুবাই", flag: "🇦🇪", price: "৯,৫০০ ৳", visaType: "ট্যুরিস্ট" },
        { id: 2, name: "সিঙ্গাপুর", flag: "🇸🇬", price: "৫,২০০ ৳", visaType: "এক্সপ্রেস" }
    ];

    constructor() {
        this.loadInitialData();
    }

    private loadInitialData(): void {
        if (!localStorage.getItem('fly_visas')) {
            localStorage.setItem('fly_visas', JSON.stringify(this.visaPackages));
        }
    }

    // ডেটা রিট্রিভ করার মেথড
    public getVisas(): VisaPackage[] {
        return JSON.parse(localStorage.getItem('fly_visas') || '[]');
    }

    // অ্যাডমিন অ্যাপ্লিকেশন সেভ করার মেথড
    public saveVisaApplication(app: Booking): void {
        const apps: Booking[] = JSON.parse(localStorage.getItem('fly_apps') || '[]');
        apps.unshift(app);
        localStorage.setItem('fly_apps', JSON.stringify(apps));
    }

    // লগইন চেক মেথড
    public isAuthenticated(): boolean {
        return !!localStorage.getItem('logged_user_email');
    }
}

// Singleton Instance
export const flyTripService = new FlyTripService();
};