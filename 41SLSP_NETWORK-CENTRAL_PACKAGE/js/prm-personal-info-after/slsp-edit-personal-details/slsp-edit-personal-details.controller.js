//-----------------------------------------------


export class slspEditPersonalDetailsController {

    constructor($scope, $element, $rootScope, $window) {
        this.$scope = $scope;
        this.$element = $element;
        this.$rootScope = $rootScope;
        this.$window = $window;

    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            //console.log(this.parentCtrl);
            this.detailsBaseEdu = "https:\/\/eduid.ch\/account\/profile";
            this.detailsBaseReg = "https:\/\/registration.slsp.ch\/library-card";
            this.exclude = ['STAFF', '11', '12', '13', '14', '15', '16', '17', '18', '91', '92', '99'];
            this.grpA = ['11', '91', '92'];
            this.grpB = ['12', '13', '14', '15', '16', '17', '18'];

            this.getPatronGrp = function() {
                if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
                    let patron = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
                    if (!this.exclude.includes(patron)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            }

            this.grpLabelA = function() {
                if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
                    let labelA = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
                    if (this.grpA.includes(labelA)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            }


            this.grpLabelB = function() {
                if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
                    let labelB = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
                    if (this.grpB.includes(labelB)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            }

            this.buttonMove = function() {
                let parentElement = angular.element(document.querySelector('md-card > md-card-content > prm-personal-settings > prm-personal-settings-after'));
                let element = angular.element(document.querySelector('#SLSPeditPersonalDetails'));
                parentElement.append(element);
            }

            


        } catch (e) {
            console.error("***SLSP*** an error occured: EditPersonalDetailsController\n\n");
            console.error(e.message);
        }
    }
    getLanguage() {
        let sms = this.$rootScope.$$childHead.$ctrl.userSessionManagerService;
        
        if (!sms) {
            return 'en';
        } else {
            return sms.getUserLanguage() || this.$window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
        }
    }
}

slspEditPersonalDetailsController.$inject = ['$scope', '$element', '$rootScope', '$window'];