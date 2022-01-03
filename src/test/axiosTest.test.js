import axios from "axios";
import { shallow } from "enzyme";
// یک سرور شبیه سازی میکند و درخواست ها را شبیه سازی میکند
import moxios from "moxios";
import AxiosTest from '../components/axiosTest';
import { woops } from '../components/axiosTest';

describe("تست درخواست هایی http", () => {
    const setup = () => {
        return shallow(<AxiosTest />);
    }
    // این متد در اصل یک هوک است
    // و طبق قوانین هوک باید در راس صدا زده شود
    // بطور مثال اگر describe میکنید
    // از متد test و یا it 
    // استفاده کردید نمیتوانید داخل انها صدا بزنید
    beforeEach(function () {
        // طبق توضیحات داکیومنتیشن
        // نمونه axios سفارشی خود را وارد کرده و به این روش ارسال کنید
        moxios.install();
    })
  
    afterEach(function () {
        moxios.uninstall()
    })

    test.skip("تست وضعیت 200", async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: 'party',
            });
          });

        return await woops()
                .then((party) => {
            expect(party).toBe('party');
        });
    })

    test.skip("تست وضعیت 404", async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 404 })
        .then(() => {
          try {
            console.log("h")
            done();
          } catch (err) {
            done.fail(err);
          }
        });
      });
      // const p  = axios.getRaw('/test');
      //   const errorResp = {
      //       status: 404,
      //       response: { message: 'invalid data1', data: 'invalid data' }
      //     }
      
      //     moxios.wait(function () {
      //       let request = moxios.requests.mostRecent();
      //       request.reject(errorResp);


      //       p.then(function(err) {
      //         // In a 400 error, the err.response.data is returned as the response.
      //         expect(err).toBe('invalid data1');
      //         done();
      //     });
      //     });

          
          // return await woops()
          //   .then((party) => {
          //   expect(party).toBe('party');
          // });

          // return await woops()
          //     .then((party) => {
          //     expect(party).toBe('party')
          //     })
          //     .catch(err => {
          //     expect(err).equal(err.status, errorResp.status)
          //     // equal(err.response.message, errorResp.response.message)
          //     // done()
          //   // })
          // })

          // expect(function (err) {
          //   equal(err.status, errorResp.status)
          //   equal(err.response.message, errorResp.response.message)
          //   done()

        // const errResp = {
        //     status: 422,
        //     response: { message: 'problem' },
        //   };
        //   moxios.wait(() => {
        //     const request = moxios.requests.mostRecent();
        //     request.reject(errResp);
        //   });
        // moxios.wait(() => {
        //     const request = moxios.requests.mostRecent();
        //     request.respondWith({
        //       status: 404,
        //       response: 404
        //     });
        //   });

        // return await woops()
        //         .then((party) => {
        //         expect(party).toBe(404);
        //     });

        // return await woops()
        //     .then(() => {
        //         const newState = store.getState();
        //         expect(newState.serverError).toBe(true);
        // });
    });

    // describe("تست یک Url", () => {
    //     let axiosInstance;
    //     beforeEach(() => {
    //       axiosInstance = axios.create();
    //       moxios.install(axiosInstance);
    //     })
    //     afterEach(() => {
    //       moxios.uninstall(axiosInstance)
    //     })
    //     test('should axios a thing', (done) => {
    //       moxios.stubRequest('http://www.somesite.com/awesome-url', {
    //         status: 200,
    //         responseText: '…'
    //       })
    //       axiosInstance.get('http://www.somesite.com/awesome-url')
    //         .then(res => assert(res.status === 200))
    //         .finally(done)
    //     })
    // })
})