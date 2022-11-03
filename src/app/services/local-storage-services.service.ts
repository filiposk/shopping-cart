import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	// TODO: Create proper token service
	constructor(@Inject(LOCAL_STORAGE) private localStorage: StorageService) {}

	//insert data into storage
	setToStorage(key: string, value: any): void {
		this.localStorage.set(key, value);
	}

	//get data from storage
	getFromStorage(key: string): any {
		return this.localStorage.get(key);
	}

	//delete data from storage
	deleteFromStorage(key: string): void {
		this.localStorage.remove(key);
	}
}
