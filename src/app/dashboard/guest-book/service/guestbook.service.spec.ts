import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { GuestBookComponent } from '../guest-book.component';
import { GuestbookService } from './guestbook.service';

describe('GuestBookService with HTTP Service ', () => {
    let guestBookService: GuestbookService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GuestBookComponent],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers: [GuestbookService],
        });
        guestBookService = TestBed.inject(GuestbookService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Blog service created', () => {
        expect(GuestbookService).toBeDefined();
    });

    it('Blog service have a getAll() method', () => {
        expect(guestBookService.getAll).toBeDefined();
    });

    it('Blog service have a getById() method', () => {
        expect(guestBookService.getById).toBeDefined();
    });

    it('Blog service have a save() method', () => {
        expect(guestBookService.save).toBeDefined();
    });

    it('Blog service have a savePublic() method', () => {
        expect(guestBookService.savePublic).toBeDefined();
    });

    it('Blog service have a delete() method', () => {
        expect(guestBookService.delete).toBeDefined();
    });

    it('Blog service have a listUpdated() method', () => {
        expect(guestBookService.listUpdated).toBeDefined();
    });

    it('Blog service POST', () => {
        const url = '/api/guest-book';
        const mockGuestBook: GuestBook = {
            name: 'Rudi',
            email: 'Rudi@gmail.com',
            message: 'Hallo Rudi',
        };

        guestBookService.save(mockGuestBook).subscribe((response: GuestBook) => {
            expect(response).toEqual(mockGuestBook);
        });
        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('POST');
        expect(request.request.body).toEqual(mockGuestBook);
    });
});
